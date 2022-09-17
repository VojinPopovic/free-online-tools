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
      {iconRender? <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="white" d="m33.71 17.29l-15-15a1 1 0 0 0-1.41 0l-15 15a1 1 0 0 0 1.41 1.41L18 4.41l14.29 14.3a1 1 0 0 0 1.41-1.41Z" className="clr-i-outline clr-i-outline-path-1"/><path fill="white" d="M28 32h-5V22H13v10H8V18l-2 2v12a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76l-2-2Z" className="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="white" fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></svg>}
    </button>
  );
}

export default ArrowDown;
