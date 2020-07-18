package graph

import (
	"context"
	"app/config"
	"app/graph/model"
	"app/models"
	"fmt"
)

type Resolver struct{}

func (r *Resolver) getUsers(ctx context.Context) ([]*model.User, error) {
	db := config.DB()

	users, err := models.Users(db)
	if err != nil {
		return nil, err
	}

	resp := make([]*model.User, 0, len(users))
	for _, v := range users {
		resp = append(resp, &model.User{
			ID:   v.ID,
			Name: v.Name,
			InvestmentExperience: v.InvestmentExperience,
			Income: v.Income,
		})
	}

	return resp, nil
}

func (r *Resolver) getUserByID(ctx context.Context, userID *int) (*model.User, error) {
	db := config.DB()

	user, err := models.UserByID(db, *userID)
  if err != nil {
		return nil, err
	}

	return &model.User{
		ID: user.ID,
		Name: user.Name,
		InvestmentExperience: user.InvestmentExperience,
		Income: user.Income,
	}, nil
}

func (r *mutationResolver) createUser(ctx context.Context, input model.NewUser) (*model.User, error) {
	db := config.DB()

	user := &models.User{
		Name: input.Name,
	}
	err := user.Insert(db)
	if err != nil {
		return nil, err
	}

	return &model.User{
		ID: user.ID,
		Name: user.Name,
	}, nil
}

func (r *mutationResolver) updateUser(ctx context.Context, input model.UpdateUser) (*model.User, error) {
	db := config.DB()
	fmt.Printf("Test1\n")
	user, errGet := models.UserByID(db, input.ID)
	fmt.Printf("%+v\n", user)
	if errGet != nil {
		return nil, errGet
	}

	user.Name = input.Name
	user.InvestmentExperience = input.InvestmentExperience
	user.Income = input.Income

	errUpdate := user.Update(db)
	if errUpdate != nil {
		return nil, errUpdate
	}

	return &model.User{
		ID: user.ID,
		Name: user.Name,
		InvestmentExperience: user.InvestmentExperience,
		Income: user.Income,
	}, nil
}
