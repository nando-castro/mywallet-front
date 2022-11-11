import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  const data = [
    {
      Component: ThreeDots,
      props: {
        color: "#FFFFFF",
        height: 100,
        width: 110,
        radius: 40,
      },
      name: "ThreeDots",
    },
  ];
  return (
    <div className="row">
      {data.map((loader, index) => (
        <div key={index}>
          <div
            data-tip={loader.name}
            data-for="happyFace"
            key={loader.name + index}
            className="loaderBox"
          >
            <loader.Component {...loader.props} />
          </div>
        </div>
      ))}
    </div>
  );
}
