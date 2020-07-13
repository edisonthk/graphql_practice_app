package graph

import (
	"context"
	"app/config"
	"app/graph/model"
	"app/models"
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
