type User = {
	username: string;
	role: "guest" | "member" | "admin";
};

const user1: User = {
	username: "chillie",
	role: "admin", // if I change this to other than 3 roles, like example `hacker`, it will be error
};
