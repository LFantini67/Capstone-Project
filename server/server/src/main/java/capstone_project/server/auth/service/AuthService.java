package capstone_project.server.auth.service;

import capstone_project.server.auth.entity.User;
import capstone_project.server.auth.payload.LoginDto;
import capstone_project.server.auth.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    
}
