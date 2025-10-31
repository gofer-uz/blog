import { importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../mdx-components";
import Giscus from "../../components/Giscus";
import fs from "fs";
import path from "path";

function getAllMdxFiles(dir: string, baseDir: string = dir): string[][] {
  const files: string[][] = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    if (item.startsWith("_") || item.startsWith(".")) continue;

    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getAllMdxFiles(fullPath, baseDir));
    } else if (item.endsWith(".mdx") || item.endsWith(".md")) {
      const relativePath = path.relative(baseDir, fullPath);
      const pathSegments = relativePath
        .replace(/\.(mdx|md)$/, "")
        .split(path.sep);

      if (pathSegments[pathSegments.length - 1] === "index") {
        pathSegments.pop();
      }

      files.push(pathSegments);
    }
  }

  return files;
}

export function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content");
  const allPaths = getAllMdxFiles(contentDir);

  const params = allPaths.map((segments) => ({
    mdxPath: segments,
  }));

  params.push({ mdxPath: [] });

  return params;
}

export async function generateMetadata(props: any) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

const Wrapper =
  getMDXComponents().wrapper || (({ children }: any) => <>{children}</>);

export default async function Page(props: any) {
  const params = await props.params;
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.mdxPath);

  const isMainPage = !params.mdxPath || params.mdxPath.length === 0;

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
      {!isMainPage && <Giscus />}
    </Wrapper>
  );
}
