package issuetracker.issuetracker.domain.user;

import issuetracker.issuetracker.domain.user.dto.AssigneeDTO;
import issuetracker.issuetracker.domain.user.dto.UserFilterDTO;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
@Transactional
class UserControllerTest {

    @Autowired
    private UserRepository userRepository;

    // TODO : 테스트용 DB를 만들어서 테스트 예정
    @Test
    @DisplayName("6명이 저장된 저장소에서 회원 전체 조회 테스트")
    void getAssignees() {
        // when
        List<UserFilterDTO> userFilter = userRepository.getUserFilter();
        // then
        assertThat(userFilter.size()).isEqualTo(6);
    }

}