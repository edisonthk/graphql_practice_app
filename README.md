# GraphQL practice app

## Setup
```
docker-compose -f infrastructure/docker-compose.yml up
```

## Usage
- Service Site
http://localhost:8000
- GraphQL Playground
http://localhost:8080

## GraphQLのサンプル

userIDが１番のユーザ詳細を取得

```graphql
{
  getUserByID(userId: 1) {
    id
    name
    investment_experience
    income
  }
}

```

userIDが１番のユーザデータを編集

```graphql
mutation {
  updateUser(input: {
    id: 1,
    name: "サンプル",
    investment_experience: "",
    income: "",
  }) {
    id
    name
    investment_experience
    income
  }
} 
```