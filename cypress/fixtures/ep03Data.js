function generateCPF() {
  var n = 9;
  var n1 = Math.floor(Math.random() * n);
  var n2 = Math.floor(Math.random() * n);
  var n3 = Math.floor(Math.random() * n);
  var n4 = Math.floor(Math.random() * n);
  var n5 = Math.floor(Math.random() * n);
  var n6 = Math.floor(Math.random() * n);
  var n7 = Math.floor(Math.random() * n);
  var n8 = Math.floor(Math.random() * n);
  var n9 = Math.floor(Math.random() * n); // primeiro dígito verificador

  var d1 =
    n9 * 2 +
    n8 * 3 +
    n7 * 4 +
    n6 * 5 +
    n5 * 6 +
    n4 * 7 +
    n3 * 8 +
    n2 * 9 +
    n1 * 10;
  d1 = 11 - (d1 % 11);
  if (d1 >= 10) d1 = 0;

  var d2 =
    d1 * 2 +
    n9 * 3 +
    n8 * 4 +
    n7 * 5 +
    n6 * 6 +
    n5 * 7 +
    n4 * 8 +
    n3 * 9 +
    n2 * 10 +
    n1 * 11;
  d2 = 11 - (d2 % 11);
  if (d2 >= 10) d2 = 0;

  return "" + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;
}

export const familyData = {
  zipCode: "52171-900",
  number: 2,
  affectedHouse: "Sim, está habitável e não precisa de reparos",
  members: [
    {
      name: "Luan Accioly",
      cpf: generateCPF(),
      gender: "Masculino",
      birthDate: {
        day: 1,
        month: "JAN",
        year: 2001,
      },
      declaredColor: "Parda",
      isResponsible: true,
      relationshipToResponsible: "",
      isDeficient: false,
    },
    {
      name: "Átila Rodrigues",
      cpf: generateCPF(),
      gender: "Masculino",
      birthDate: {
        day: 16,
        month: "FEV",
        year: 2001,
      },
      declaredColor: "Parda",
      isResponsible: false,
      relationshipToResponsible: "Filho/Filha",
      isDeficient: false,
    },
    {
      name: "Mario Leandro",
      cpf: generateCPF(),
      gender: "Não Informado",
      birthDate: {
        day: 1,
        month: "JUL",
        year: 2001,
      },
      declaredColor: "Parda",
      isResponsible: false,
      relationshipToResponsible: "Filho/Filha",
      isDeficient: false,
    },
  ],
};
