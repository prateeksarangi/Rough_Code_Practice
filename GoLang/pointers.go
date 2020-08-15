package main
import "fmt"

func main() {
  var x int = 15;
  var a *int = &x;
  fmt.Println(a);
  fmt.Println(*a);
  *a = 5;
  fmt.Println(x);
  *a = *a**a;
  fmt.Println(x);
  fmt.Println(*a);
}
