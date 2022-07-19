export function generateNumbers(j) {
  let s = [];
  for (let i = 0; i < j; i++) {
    s.push(Math.random() * 350);
  }

  return s;
}

export function generateChart(nums) {
  const final = [];

  nums.forEach((item, index) => {
    final.push(
      <div className="scraper" key={index} style={{ height: item }}></div>
    );
  });

  return final;
}
