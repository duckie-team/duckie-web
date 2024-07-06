import { api } from "../../../lib/api";

async function fetchMe(id: number) {
  return await api.user.get({id: id})
}
export default async function Onboarding() {
  const user = await fetchMe(23);
  console.log(user)
  return (
    <div className="pl-[1.33rem] pr-[1.33rem] w-[100%] md:pr-0 md:pr-0 md:w-[41.667rem] gap-[2rem] flex flex-col">

      <section className="flex flex-col w-[100%] gap-[1.33rem] md:gap-[2rem]">
        <div>
          Hello
        </div>
      </section>
    </div>
  );
}