package capstone_project.server.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import capstone_project.server.auth.entity.ERole;
import capstone_project.server.auth.entity.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(ERole roleName);

}
