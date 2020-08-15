package main

import ("fmt")

func add (x, y float64) float64 {
  return x+y;
}

func main() {
  var num1, num2 float64 = 5.6, 9.5;
  fmt.Println(add(num1, num2));
  var a int = 62;
  var b float64 = float64(a);
  var c int = a;
  const x int = 4;
  fmt.Println(a, b, c, x);
}
