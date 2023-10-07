package main

import (
  "fmt"
  // "strings"
)

func main() {
  fmt.Println(reverseVowels("hello"))
}

func reverseVowels(s string) string {
  sv := []rune("aeiouAEIOU")
  runes := []rune(s)
  

  for i := 0; i < len(s); i++ {

      fmt.Println(len(s), len(runes))
    fmt.Println(s[i])
    fmt.Println(sv)
  }
  return s
}

