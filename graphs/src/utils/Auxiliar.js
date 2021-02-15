const isValid = (row, column, length, color) => {
    if (row < 0 || column < 0) return false;
    if (row > length || column > length) return false;
    if (this.fields[column][row].isSelected) return false;
    return true;
};

export {isValid};