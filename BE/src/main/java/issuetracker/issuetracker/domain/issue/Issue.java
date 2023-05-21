package issuetracker.issuetracker.domain.issue;

import lombok.*;
import nonapi.io.github.classgraph.json.Id;

import java.time.LocalDateTime;

@Getter
@Setter
public class Issue {
    @Id
    private Long issueId;
    private String title;
    private String contents;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private Boolean isOPen;
    private Boolean isDelete;
}
