import { TailSpin, ThreeDots } from 'react-loader-spinner';

export default function Loader() {

    const data = [
        {
            Component: ThreeDots,
            props: {
                color: "#52B6FF",
                height: 100,
                width: 110,
                radius: 40
            },
            name: "ThreeDots"
        },
        {
            Component: TailSpin,
            props: {
              color: "#0ead69",
              height: 100,
              width: 110
            },
            name: "TailSpin"
          }
    ];
    return (
        <div className="row">
            {data.map((loader, index) => (
                <div>
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
    )
}