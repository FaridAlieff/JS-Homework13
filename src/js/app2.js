const inputElement = document.getElementById("myInput");

inputElement.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    e.preventDefault();
    const cursorPosition = this.selectionStart;
    const inputValue = this.value;
    if (cursorPosition > 0) {
      const newValue =
        inputValue.substring(0, cursorPosition - 1) +
        inputValue.substring(cursorPosition);
      this.value = newValue;
      this.selectionStart = cursorPosition - 1;
      this.selectionEnd = cursorPosition - 1;
    }
  } else if (e.key === "Backspace") {
    e.preventDefault();
    const cursorPosition = this.selectionStart;
    const inputValue = this.value;
    const newValue =
      inputValue.substring(0, cursorPosition) +
      " " +
      inputValue.substring(cursorPosition);
    this.value = newValue;
    this.selectionStart = cursorPosition + 1;
    this.selectionEnd = cursorPosition + 1;
  }
});