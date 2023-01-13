package com.example.angular_spring_boot_java.model;

//import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;
//ßimport org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
//import java.util.Collection;
//import java.util.List;

@Data
@NoArgsConstructor
@Table("app_user")
public class User implements Model {
    @Id
    private Long id;
    private Long id_appointment;
    private Long id_role;
    private Long id_address;
    private Long id_password_data;
    private String surname;
    private String name;
    private String patronymic;
    private String login;
    private String password;
    private String email;
    private String number_phone;
    private LocalDate date_reg;
    private String photo;

    @Override
    public void setId(long id) {
        this.id = id;
    }

    @Override
    public long getId() {
        return this.id;
    }
//
//
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        UserRole role = UserRole.getById(id_role);
//        if(role != null) {
//            return List.of(new SimpleGrantedAuthority(role.name()));
//        }
//        return null;
//    }
//
//    @Override
//    public String getUsername() {
//        return this.name;
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return true;
//    }
}
