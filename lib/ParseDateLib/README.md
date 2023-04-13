## Usage


parseDate(input, format);

let inputs = [
  { str: "11/02/2023 01:05:47", format: "dd/mm/yyyy hh:ii:ss" },
  { str: "04-14-2023 01:05:47 PM", format: "mm-dd-yyyy hh:ii:ss A" },
  { str: "14/05/2023 01:05", format: "dd/mm/yyyy hh:ii" },
  { str: "2023-06-14 01", format: "yyyy-mm-dd hh" },
  { str: "07-14-2023 PM", format: "mm-dd-yyyy A" },
];

for (let i = 0; i < inputs.length; i++) {
  console.log(parseDate(inputs[i].str, inputs[i].format))
}
