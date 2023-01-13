package com.example.angular_spring_boot_java.model;

public enum UserRole {
     WORKER(1), MANAGER(2), NULL(0);
    private Long id;


    UserRole(long id) {
        this.id = id;
    }

    public static UserRole getById(Long id) {
        for (UserRole e : values()) {
            if(e.id.equals(id)) {
                return e;
            }
        }
        return UserRole.NULL;
    }
}
