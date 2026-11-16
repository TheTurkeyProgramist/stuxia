export const getWindDirectionText = (degrees) => {
  if (degrees === undefined || degrees === null) return "—";
  const val = Math.floor(degrees / 45 + 0.5);
  const arr = [
    "Північний",
    "Північно-східний",
    "Східний",
    "Південно-східний",
    "Південний",
    "Південно-західний",
    "Західний",
    "Північно-західний",
  ];
  return arr[val % 8];
};

// Короткий напрям вітру для тісних плиток: «Пд-Сх» замість «Південно-східний»
export const getWindDirectionShort = (degrees) => {
  if (degrees === undefined || degrees === null) return "—";
  const val = Math.floor(degrees / 45 + 0.5);
  const arr = ["Пн", "Пн-Сх", "Сх", "Пд-Сх", "Пд", "Пд-Зх", "Зх", "Пн-Зх"];
  return arr[val % 8];
};
