let xValue,
    yValue = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX;
    yValue = e.clientY;

    console.log(xValue, yValue);
});
