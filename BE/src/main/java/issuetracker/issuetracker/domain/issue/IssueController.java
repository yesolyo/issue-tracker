package issuetracker.issuetracker.domain.issue;


import io.swagger.v3.oas.annotations.tags.Tag;
import issuetracker.issuetracker.domain.issue.comment.dto.CommentInIssueDTO;
import issuetracker.issuetracker.domain.issue.comment.dto.CommentPostDTO;
import issuetracker.issuetracker.domain.issue.dto.PostingIssueDTO;
import issuetracker.issuetracker.domain.issue.dto.IssueDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Tag(name = "posts", description = "issue 메인 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/issues")
public class IssueController {


    @PostMapping("/{issueId}")
    public void postIssue(@RequestBody PostingIssueDTO issue) {
        // 저장하는 로직 추가
    }

    @GetMapping("/{issueId}")
    public IssueDTO explainIssue(@RequestParam Long issueId) {
        // findByIssue

        return new IssueDTO();
    }

    @PutMapping("/{issueId}")
    public void updateIssue(@RequestBody PostingIssueDTO issue) {
        // 수정하는 메서드 생성
    }

    @DeleteMapping("/{issueId}")
    public void deleteIssue(@RequestParam Long issueId) {
        // 삭제 로직
    }

    @GetMapping("/{issueId}/comments")
    public List<CommentInIssueDTO> showComment(@RequestParam Long issueId) {
        // TODO 댓글 리스트 구현
        return new ArrayList<>();
    }

    @PostMapping("/{issueId}/comments")
    public void postComment(@RequestBody CommentPostDTO comment) {
        // TODO 댓글 작성하기 구현

    }

    @PutMapping("/{issueId}/comments/{commentId}")
    public void updateComment(@RequestParam Long issueId, @RequestParam Long commentId, @RequestBody CommentPostDTO comment) {
        // TODO 댓글 수정하기 구현
    }

    @DeleteMapping("/{issueId}/comments/{commentId}")
    public void deleteComment(@RequestParam Long issueId, @RequestParam Long commentId) {
        // TODO 댓글 삭제하기 구현
    }
}
