import InRestCat from "../ui/InRestCat";
import Meal from "../ui/Meal";

function InResturant() {
  return (
    <section>
      <div
        className="container-fluid pt-5 text-theme pb-5 inrest-wrapper-image"
        style={{
          backgroundImage: `linear-gradient(90deg, rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)),url("${"images/rest-wra.jpg"}")`,
        }}
      >
        {/** intro text */}

        <div className="row px-md-5 mx-md-3">
          <div className="col-12 mt-4 px-4">
            <div className="h3 fw-bolder">Woods By Road Runner kampala</div>
            <div className="p">
              Continental cuisines, finger foods, cocktails, wines and spirits
            </div>
          </div>
        </div>

        {/** contacts */}
        <div className="row px-md-5 mx-md-3">
          <div className="col-12 px-4">
            <div className="pt-2 text-grey fs-14 d-flex-native">
              <img
                className="img-fluid"
                src="/images/Vector location.png"
                alt=""
              />
              <span className="ps-2">107 Boundary Road, Kampala Uganda</span>
            </div>
            <div className="pt-2 text-grey fs-14 d-flex-native">
              <img
                src="/images/Vector telephone.png"
                className="img-fluid"
                alt=""
              />
              <span className="ps-2"></span>0907 000 0000
            </div>

            <div className="pt-2 text-grey fs-14 d-flex-native">
              <img src="images/Vector green.png" className="img-fluid" alt="" />
              <span className="text-success ps-2">Open </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/** category buttons */}
        <div
          className="row py-3 mt-md-3 no-scroll-bar flex-nowrap "
          style={{ overflowX: "scroll" }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rest, index) => (
            <InRestCat key={index} />
          ))}
        </div>

        {/** means */}
        <div className="row pt-3 px-2">
          {/** summer lunch  */}
          <div className=" fw-bold h4">
            <small className=" py-1">Summer Lunch</small>
          </div>
        </div>
        <div className="row px-2">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((rest, index) => (
            <Meal key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InResturant;
