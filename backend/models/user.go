package models

func Users(db XODB) ([]*User, error) {
	var err error

	// sql query
	const sqlstr = `SELECT ` +
		`id, name ` +
		`FROM users `

	// run query
	XOLog(sqlstr)

	q, err := db.Query(sqlstr)
	if err != nil {
		return nil, err
	}
	defer q.Close()

	// load results
	res := []*User{}
	for q.Next() {
		user := User{}

		// scan
		err = q.Scan(&user.ID, &user.Name)
		if err != nil {
			return nil, err
		}

		res = append(res, &user)
	}

	return res, nil
}
