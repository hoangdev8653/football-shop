import Description from "./Decription";
import Reviews from "./Reviews";

function Index({ data }) {
  return (
    <div>
      <Description data={data} />
      <Reviews data={data} />
    </div>
  );
}

export default Index;
