import { ButtonGroup } from "../../styles/calculator-styles/CalcBody.style";
import Button from "./Button";

function Buttons(props) {
  let propsOb = {
    values: props.value,
    setValue: props.setValue,
    display: props.display,
    setDisplay: props.setDisplay,
  };

  return (
    <>
      <ButtonGroup>
        <Button value="c" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#898989" d="M11 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h-2v1h-2V9h2v1h2V9a2 2 0 0 0-2-2h-2Z"/></svg></div>
        </Button>
        <Button value="+-" propsOb={propsOb}>
          <p>+/-</p>
        </Button>
        <Button value="%" propsOb={propsOb}>
          <p>%</p>
        </Button>
        <Button value="/" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><g fill="#7b67f2"><path d="M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H5Z"/><circle cx="10" cy="5.5" r="1.5"/><circle cx="10" cy="14.5" r="1.5"/></g></svg></div>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button value="7" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="0.63em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 320 512"><path fill="#728ab7" d="m315.6 80.14l-224 384c-5.953 10.19-16.66 15.88-27.67 15.88a31.896 31.896 0 0 1-16.09-4.359c-15.27-8.906-20.42-28.5-11.52-43.77l195.9-335.9H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h256c11.45 0 22.05 6.125 27.75 16.06s5.65 22.179-.15 32.089z"/></svg></div>
        </Button>
        <Button value="8" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="0.8em" height="1.1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 320 512"><path fill="#728ab7" d="M267.5 249.2C290 226.1 304 194.7 304 160c0-70.58-57.42-128-128-128h-32C73.42 32 16 89.42 16 160c0 34.7 13.99 66.12 36.48 89.19C20.83 272.5 0 309.8 0 352c0 70.58 57.42 128 128 128h64c70.58 0 128-57.42 128-128c0-42.2-20.8-79.5-52.5-102.8zM144 96.01h32c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32c-35.3 0-64-28.7-64-64s28.7-64 64-64zM192 416h-64c-35.3 0-64-28.7-64-64s28.7-64 64-64h64c35.3 0 64 28.7 64 64s-28.7 64-64 64z"/></svg></div>
        </Button>
        <Button value="9" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="0.8em" height="1.1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 320 512"><path fill="#728ab7" d="M160 32.01c-88.22 0-160 71.78-160 160c0 85.57 67.71 155.1 152.3 159.2l-64.65 76.06c-11.47 13.45-9.812 33.66 3.656 45.09c6 5.125 13.38 7.62 20.72 7.62c9.062 0 18.06-3.823 24.38-11.28C281.9 297.5 320 266.6 320 192c0-88.2-71.8-159.99-160-159.99zM160 288c-52.94 0-96-43.06-96-95.1s43.06-96 96-96s96 43.06 96 96s-43.1 95.1-96 95.1z"/></svg></div>
        </Button>
        <Button value="*" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="#7b67f2" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></div>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button value="4" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="0.75em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 384 512"><path fill="#728ab7" d="M384 334.2c0 17.67-14.33 32-32 32h-32v81.78c0 17.67-14.33 32-32 32s-32-14.33-32-32V366.2H32a32.046 32.046 0 0 1-27.05-14.89a32.038 32.038 0 0 1-1.875-30.81l128-270.2C138.6 34.33 157.8 27.56 173.7 35.09c15.97 7.562 22.78 26.66 15.22 42.63L82.56 302.2H256V160c0-17.67 14.33-32 32-32s32 14.33 32 32v142.2h32c17.7 0 32 14.4 32 32z"/></svg></div>
        </Button>
        <Button value="5" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="0.63em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 320 512"><path fill="#728ab7" d="M320 344.6c0 74.66-60.73 135.4-135.4 135.4h-79.9c-46.81 0-88.22-29.83-103-74.23c-5.594-16.77 3.469-34.89 20.23-40.48c16.83-5.625 34.91 3.469 40.48 20.23a44.533 44.533 0 0 0 42.3 30.48h79.95c39.36 0 71.39-32.03 71.39-71.39s-32.03-71.38-71.39-71.38H32a32.017 32.017 0 0 1-24.56-11.48A31.866 31.866 0 0 1 .516 235.6l32-177.2C35.27 43.09 48.52 32.01 64 32.01l192 .005c17.67 0 32 14.33 32 32s-14.33 32-32 32H90.73L70.3 209.2h114.3c74.7 0 135.4 59.9 135.4 135.4z"/></svg></div>
        </Button>
        <Button value="6" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="0.63em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 320 512"><path fill="#728ab7" d="m167.7 160.8l64.65-76.06c11.47-13.45 9.812-33.66-3.656-45.09C222.7 34.51 215.3 32.01 208 32.01c-9.062 0-18.06 3.833-24.38 11.29C38.07 214.5 0 245.5 0 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-85.6-67.7-155.1-152.3-159.2zM160 416c-52.94 0-96-43.06-96-96s43.06-95.1 96-95.1s96 43.06 96 95.1s-43.1 96-96 96z"/></svg></div>
        </Button>
        <Button value="-" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="#7b67f2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"/></svg></div>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button value="1" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 512"><path fill="#728ab7" d="M256 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h64V123.8l-46.25 30.8c-14.73 9.9-34.56 5.8-44.375-8.8c-9.797-14.7-5.828-34.6 8.875-44.4l96-64c9.828-6.547 22.45-7.187 32.84-1.594A31.992 31.992 0 0 1 160 64.01v352h64c17.7-.01 32 14.29 32 31.99z"/></svg></div>
        </Button>
        <Button value="2" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="0.63em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 320 512"><path fill="#728ab7" d="M320 448c0 17.67-14.33 32-32 32H32a31.995 31.995 0 0 1-29.7-20.09a31.994 31.994 0 0 1 7.594-35.03l193.6-185.1c31.36-30.17 33.95-80 5.812-113.4c-14.91-17.69-35.86-28.12-58.97-29.38c-22.936-1.17-45.036 6.9-61.806 22.9l-35.01 31.8c-13.08 11.91-33.33 10.89-45.2-2.172C-3.563 136.5-2.594 116.2 10.48 104.3L44.93 73c28.67-27.34 68.39-42.11 108.9-39.88c40.33 2.188 78.39 21.16 104.4 52.03c49.8 59.05 45.2 147.3-10.45 200.8l-136 130H288c17.7.05 32 14.35 32 32.05z"/></svg></div>
        </Button>
        <Button value="3" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="0.63em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 320 512"><path fill="#728ab7" d="M320 344c0 74.98-61.02 136-136 136h-80.4c-46.34 0-87.31-29.53-101.1-73.48c-5.594-16.77 3.484-34.88 20.25-40.47c16.75-5.609 34.89 3.484 40.47 20.25a43.38 43.38 0 0 0 41.23 29.7H184c39.7 0 72-32.3 72-72s-32.3-72-72-72H80c-13.2 0-25.05-8.094-29.83-20.41c-4.78-12.29-1.51-26.29 8.21-35.19L189.78 96H32C14.33 96 0 81.67 0 64s14.33-32 32-32h240c13.2 0 25.05 8.094 29.83 20.41c4.781 12.3 1.516 26.27-8.203 35.19L162.227 208H184c74.1 0 136 61 136 136z"/></svg></div>
        </Button>
        <Button value="+" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="#7b67f2" strokeLinecap="round" strokeWidth="2" d="M12 20v-8m0 0V4m0 8h8m-8 0H4"/></svg></div>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button value="0" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="0.63em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 320 512"><path fill="#728ab7" d="M160 32.01c-88.37 0-160 71.63-160 160v127.1c0 88.37 71.63 160 160 160s160-71.63 160-160V192c0-88.4-71.6-159.99-160-159.99zM256 320c0 52.93-43.06 96-96 96c-52.93 0-96-43.07-96-96V192c0-52.94 43.07-96 96-96c52.94 0 96 43.06 96 96v128z"/></svg></div>
        </Button>
        <Button value="." propsOb={propsOb}>
          <p>.</p>
        </Button>
        <Button value="=" propsOb={propsOb}>
          {/* prettier-ignore */}
          <div><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="white" d="M5.063 7C3.381 7 2 8.343 2 10c0 1.647 1.381 3 3.063 3h21.874C28.618 13 30 11.657 30 10c0-1.647-1.372-3-3.063-3H5.063Zm0 12C3.381 19 2 20.343 2 22c0 1.647 1.381 3 3.063 3h21.874C28.618 25 30 23.657 30 22c0-1.647-1.372-3-3.063-3H5.063Z"/></svg></div>
        </Button>
      </ButtonGroup>
    </>
  );
}

export default Buttons;
