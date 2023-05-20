package issuetracker.issuetracker.domain.issue;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Getter
@Setter
public class Issue {
    @Id
    private Long id;
    private String title;
    private String contents;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private Boolean isOPen;
    private Boolean isDelete;
}
