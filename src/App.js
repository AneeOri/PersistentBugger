import "./styles.css";

export default function App() {
  function persistence(num, count) {
    count = count || 0;
    let numStr = num.toString();

    if (numStr.length === 1) {
      return count;
    }
    let new_num = numStr.split("").reduce((acc, val) => {
      return acc * val;
    }, 1);
    return persistence(new_num, count + 1);
  }

  function persistence1(num) {
    let count = 0;
    num = String(num);
    while (num.length > 1) {
      count++;
      num = String([...num].reduce((ac, a) => a * ac, 1));
    }
    return count;
  }

  const persistence2 = (num) => {
    return `${num}`.length > 1
      ? 1 + persistence(`${num}`.split("").reduce((a, b) => a * +b))
      : 0;
  };

  function persistence3(num, cnt = 0) {
    console.log("holi", cnt);
    let arrayNum = num.toString().split("");
    return arrayNum.length === 1
      ? cnt
      : persistence3(
          arrayNum.reduce((x, y) => x * y),
          ++cnt
        );
  }

  console.log(persistence3(98));

  return (
    <div className="App">
      <input />
    </div>
  );
}
