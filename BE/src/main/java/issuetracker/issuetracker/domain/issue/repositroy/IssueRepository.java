package issuetracker.issuetracker.domain.issue.repositroy;

import issuetracker.issuetracker.domain.issue.Issue;
import issuetracker.issuetracker.domain.issue.dto.IssueDTO;
import issuetracker.issuetracker.domain.issue.dto.IssueDetail;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IssueRepository extends CrudRepository<Issue, Long> {

    //TODO where 절을 줘서 줄수 있을 것 같다 하지만 분리시키는 것이 좋을 것 같다.
//    @Query("SELECT i.issue_id, i.title, i.create_time, i.update_time, i.is_open, m.title AS milestone,\n" +
//            "    a.member_id AS author_id, a.member_name AS author_name, a.profile_url AS author_profile_url,\n" +
//            "    asg.member_id AS assignee_id, asg.member_name AS assignee_name, asg.profile_url AS assignee_profile_url,\n" +
//            "    l.label_id, l.title AS label_name, l.background_color, l.font_color, c.comment_id\n" +
//            "FROM issue i\n" +
//            "LEFT JOIN milestone m ON i.milestone_id = m.milestone_id\n" +
//            "LEFT JOIN member a ON i.author = a.member_id\n" +
//            "LEFT JOIN assignee ag ON i.issue_id = ag.issue_id\n" +
//            "LEFT JOIN member asg ON ag.member_id = asg.member_id\n" +
//            "LEFT JOIN label_list ll ON i.issue_id = ll.issue_id\n" +
//            "LEFT JOIN label l ON ll.label_id = l.label_id\n" +
//            "LEFT JOIN comment c ON i.issue_id = c.issue_id\n" +
//            "WHERE i.is_open = :isOpen\n" +
//            "AND (:author IS NULL OR u_author.username = :author)\n" +
//            "AND (:label IS NULL OR l.label_name = :label)\n" +
//            "AND (:milestone IS NULL OR m.title = :milestone)\n" +
//            "AND (:assignee IS NULL OR u_assignee.username IN (:assignee))\n" +
//            "AND (:commenter IS NULL OR c.commenter = :commenter)")
//    List<IssueDTO> filterByIssue(@Param("isOpen") String isOpen,
//                                 @Param("author") String author,
//                                 @Param("assignee") List<String> assignee,
//                                 @Param("commenter") String commenter);

    @Query("SELECT id, title, createTime, updateTime, isOPen, milestone " +
            "FROM issue WHERE id = :id")
    IssueDetail findByIssueDetail(@Param("id") Long id);
}
