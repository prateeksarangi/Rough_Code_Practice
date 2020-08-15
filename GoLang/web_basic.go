package main;
import ("fmt"; "net/http"; "log");

func indexHandler(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "Hello World from Go!!");
}

func aboutHandler(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "My name is Prateek");
}

func main() {
  http.HandleFunc("/", indexHandler);
  http.HandleFunc("/about/", aboutHandler)
  log.Fatal(http.ListenAndServe(":8080", nil));
}
