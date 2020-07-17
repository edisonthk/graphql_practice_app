// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type NewUser struct {
	Name string `json:"name"`
}

type UpdateUser struct {
	ID                   int    `json:"id"`
	Name                 string `json:"name"`
	InvestmentExperience string `json:"investment_experience"`
	Income               string `json:"income"`
}

type User struct {
	ID                   int    `json:"id"`
	Name                 string `json:"name"`
	InvestmentExperience string `json:"investment_experience"`
	Income               string `json:"income"`
}
