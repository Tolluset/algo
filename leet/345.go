package main

import (
  "fmt"
  // "strings"
"slices"
)

func main() {
  fmt.Println("res", reverseVowels("hello"))
}

func reverseVowels(s string) string {
  vowels := []rune("aeiouAEIOU")
  s_runes := []rune(s)
  s_vowels := []rune{}
  

  for i := 0; i < len(s); i++ {
      fmt.Println(len(s), len(runes))
    // fmt.Println(s[i])
    fmt.Println(vowels)
    fmt.Println(runes)
    if (slices.Contains(vowels, s[i])) {}
      s_vowels = append(s_vowels, s[i])
    }
  }
  return s
}

