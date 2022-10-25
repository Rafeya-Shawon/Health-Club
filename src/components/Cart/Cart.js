import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css"

const Cart = ({ cart }) => {
  let exerciseTime = 0;
  for (const item of cart) {
    exerciseTime = exerciseTime + item.time;
  }
  const breakTime = (e) => {
    const bt = document.getElementById("bT");
    localStorage.setItem("break", JSON.stringify(e));
    bt.innerText = e;
    return bt;
  };

  let storeTime = localStorage.getItem("break");
  if (storeTime === null) {
    storeTime = "0";
  }
  const notify = () => toast("Congrats You Are Done With Today's Workout!");

  return (
    <div className="cart">
      <div >
        <div className="container mt-10">
          <div className="personal-info flex ml-2">
            <h3 className="text-xl ml-2 mt-2 font-bold">Rafeya Khandaker </h3>
          </div>

          <div className="my-info mt-8 bg-slate-300 ml-2 flex justify-center items-center gap-16  md:gap-4 lg:gap-6 h-20 rounded-lg">
            <div>
              <h3 className=" text-sm text-center">City</h3>
              <h4 className="font-medium text-lg md:text-md lg:text-2xl">
                Dhaka
              </h4>
            </div>
            <div>
              <h3 className=" text-sm text-center">Profession</h3>
              <h4 className="font-medium text-lg md:text-md lg:text-2xl">
                Trainer
              </h4>
            </div>
          </div>

          <h3 className="mt-6 text-2xl font-medium ml-2 text-left">
            Add a Break
          </h3>

          <div className="break">
            <div className="my-info mt-3 bg-slate-300 ml-2 flex justify-center items-center gap-16 md:gap-2 lg:gap-8 h-20 rounded-lg">
              <button
                onClick={() => breakTime(10)}
                className="bg-orange-400 px-2 py-2 text-white rounded-full hover:bg-orange-200"
              >
                <span>10</span>s
              </button>

              <button
                onClick={() => breakTime(15)}
                className="bg-orange-400 px-2 py-2 text-white rounded-full hover:bg-orange-200"
              >
                <span>15</span>s
              </button>

              <button
                onClick={() => breakTime(20)}
                className="bg-orange-400 px-2 py-2 text-white rounded-full hover:bg-orange-200 click:"
              >
                <span>20</span>s
              </button>

              <button
                onClick={() => breakTime(30)}
                className="bg-orange-400 px-2 py-2 text-white rounded-full hover:bg-orange-200"
              >
                <span>30</span>s
              </button>
            </div>
          </div>

          <h3 className="mt-6 mb-4 text-2xl font-medium ml-2 text-left">
            Exercise Details
          </h3>

          <div className="exercise-time ml-2 bg-slate-300 h-16 rounded-lg flex justify-between items-center">
            <h3 className="ml-2 font-semibold text-md">Exercise Time</h3>
            <h5 className="mr-2">
              <span>{exerciseTime}</span>s
            </h5>
          </div>

          <div className="break-time mt-5 ml-2 bg-slate-300 h-16 rounded-lg flex justify-between items-center">
            <h3 className="ml-2 font-semibold">Break Time</h3>
            <h5 className="mr-2">
              <span id="bT">{storeTime}</span>s
            </h5>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-orange-400 text-white px-16 mt-3  py-2 rounded-xl hover:bg-yellow-500"
              onClick={notify}
            >
              Task Completed! 
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
