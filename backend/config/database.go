package config

import (
	"fmt"
	"database/sql"

	_ "github.com/go-sql-driver/mysql" //コード内で直接参照するわけではないが、依存関係のあるパッケージには最初にアンダースコア_をつける
)

const (
	DRIVER    = "mysql"
	HOST      = "db"
	PORT      = "3306"
	DATABASE  = "react_go_development"
	USER_NAME = "docker"
	PASSWORD  = "docker"
)

var db *sql.DB

func init() {
	conn, err := sql.Open(DRIVER, dbsn())
	if err != nil {
		panic(err)
	}
	db = conn
}

func dbsn() string {
	return fmt.Sprintf(
		"%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		USER_NAME,
		PASSWORD,
		HOST,
		PORT,
		DATABASE,
	)
}

func DB() *sql.DB {
	return db
}
