export const generateRenderData = (data, maxCount) => {
  const clonedData = copyArray(data);

  return clonedData.map((colors) => {
    if (colors.length < maxCount) {
      while (colors.length !== maxCount) colors.push("");
    }

    return colors;
  });
};

export const copyArray = (arr) => {
  return arr.map((value) => [...value]);
};
