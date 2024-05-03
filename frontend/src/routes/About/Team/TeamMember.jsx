import {
  MemberCard,
  MemberCountry,
  MemberJob,
  MemberLinkedIn,
  MemberName,
  MemberPhoto,
  MemberRole,
} from './styles'
import { FaLinkedin } from 'react-icons/fa'

function TeamMember({ member }) {
  return (
    <MemberCard>
      <MemberPhoto style={{ backgroundImage: `url(${member.photoUrl})` }} />
      <MemberName>
        <div>{member.firstName}</div>
        <div>{member.lastName}</div>
      </MemberName>
      <MemberRole>{member.role}</MemberRole>
      <MemberJob>{member.previousJob}</MemberJob>
      <MemberCountry>
        {member.fromCountry} → <strong>{member.currentCountry}</strong>
      </MemberCountry>
      <MemberLinkedIn href={member.linkedInUrl} target='_blank'>
        <FaLinkedin />
      </MemberLinkedIn>
    </MemberCard>
  )
}

export default TeamMember
