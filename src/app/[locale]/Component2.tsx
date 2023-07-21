import { getTranslate, T } from "@/tolgeeServer";

export async function Component2() {
  const t = await getTranslate();
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <T
        keyName="this_is_a_key_with_tags"
        params={{
          b: <b />,
          i: <i />,
          key: "test",
        }}
      />
    </div>
  );
}
