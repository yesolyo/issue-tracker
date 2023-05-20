package issuetracker.issuetracker.domain.label.dto;

import lombok.*;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LabelDTO {
    @Id
    @NotNull
    private long id;
    @NotNull
    private String title;
    @NotNull
    private String backgroundColor;
}
