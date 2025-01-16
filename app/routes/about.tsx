export async function loader() {
  return {
    message: "Hello World",
  };
}

export default function About() {
  return <div className="flex h-screen items-center justify-center">About Page</div>;
}
