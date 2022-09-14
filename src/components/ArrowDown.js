import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ArrowDown() {
  let iconRender = false
  let currentPage = document.location.href;
  const navigate = useNavigate();
  function nextPage() {
    console.log(currentPage)
    if (currentPage.includes("projects")) {
      return "/js";
    } else if (currentPage.slice(-1) === "/") {
      return "/about";
    } else if (
      currentPage.includes("/js") ||
      currentPage.includes("/contact") ||
      currentPage.includes("/about")
    ) {
      iconRender=true
      return "/"

    }
  }
  let pageAdress = nextPage();


  return (
    <button onClick={() => navigate(pageAdress)} className="next-page">
      {/* prettier-ignore */}
      {iconRender? <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M12 20c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8m0-18C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-1 12h2v3h3v-5h2l-6-5l-6 5h2v5h3v-3"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="white" fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></svg>}
    </button>
  );
}

export default ArrowDown;
