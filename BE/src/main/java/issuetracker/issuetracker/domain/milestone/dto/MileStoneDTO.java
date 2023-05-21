package issuetracker.issuetracker.domain.milestone.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
public class MileStoneDTO {
    @Id
    @NotNull
    private Long id;
    @NotNull
    private String title;
    // 진행도 표현을 위한 필드
    private Long openIssueCount;
    private Long closeIssueCount;
}
