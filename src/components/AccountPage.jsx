import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate, Link, useParams } from "react-router-dom";

const Account = () => {
  const { user, ready } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  const logout = async() => {
    await axios.post("/logout");
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user) {
    return <Navigate to={`/login`} />;
  }
  console.log(subpage);

  const linkClasses = (type = null) => {
    let classes = "py-2 px-6";
    if (type === subpage) {
      classes += " bg-[#F5385D] text-white rounded-full";
    }
    return classes;
  };

  return (
    <div>
      <nav className="w-full flex justify-center gap-4 mt-8 mb-8">
        <Link className={linkClasses("profile")} to={"/account"}>
          My profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          My bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          My accommodation
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="flex flex-col justify-center items-center gap-2  max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})
          <button className=" bg-[#F5385D] rounded-full text-white px-20 py-2 max-w-sm mt-2">
            LogOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Account;
