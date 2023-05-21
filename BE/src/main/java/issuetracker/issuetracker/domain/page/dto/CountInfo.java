package issuetracker.issuetracker.domain.page.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CountInfo {
    private Long labelCount;
    private Long milestoneCount;
    private Long openCount;
    private Long closeCount;
}
