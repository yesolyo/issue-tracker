package issuetracker.issuetracker.domain.user.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AssigneeDTO {
    private long assigneeId;
    private String assigneeName;
    private String assigneeProfileUrl;
}
