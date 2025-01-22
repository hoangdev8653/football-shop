import Description from "./decription";
import Reviews from "./reviews";

function Index({ data }) {
  return (
    <div>
      <Description data={data} />
      <Reviews data={data} />
    </div>
  );
}

export default Index;
