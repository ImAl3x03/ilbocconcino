import type {Component} from "solid-js";
import {createSignal} from "solid-js";
import {AiFillBackward, AiFillForward} from "solid-icons/ai";

/*******************
 ****** IMAGE ******
 *******************/
import coffeeGarden from "../../image/caffe_giardino.jpg";
import show from "../../image/vetrina.jpg";

const Carousel: Component = () => {
    const [index, setIndex] = createSignal<number>(0);

    const changeImage: (direction: number) => void = (direction) => {
        const nextIndex: number = index() + direction;
        switch(true) {
            case nextIndex > 1:
                setIndex(0);
                break;
            case nextIndex < 0:
                setIndex(1);
                break;
            default:
                setIndex(nextIndex);
        }
    }

    return (
        <div id="header" class="flex justify-center items-center">
            <span
                class="ml-2"
                onClick={() => changeImage(-1)}
            >
                <AiFillBackward class={"w-12 h-12"}/>
            </span>

            <div class="w-screen h-screen flex justify-center items-center">
                <img
                    class={"w-auto h-full" + (index() !== 0 ? " hidden" : "")}
                    src={coffeeGarden}
                    alt="A man with a cup of coffee in a garden"
                />

                <img
                    class={"w-auto h-full " + (index() !== 1 ? "hidden" : "")}
                    src={show}
                    alt="Some bar food"
                />
            </div>

            <span
                class="mr-2"
                onClick={() => changeImage(+1)}
            >
                <AiFillForward class={"w-12 h-12"}/>
            </span>
        </div>
    );
}

export default Carousel