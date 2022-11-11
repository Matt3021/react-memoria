import '../App.css';

interface LabelProps {
  label: string,
  value: string
}

export const InfoItem = ({ label, value }: LabelProps) => {
  return (
    <div className='container my-5'>
      <div className='label text-base text-[#6A7D8B]'>{label}</div>
      <div className='value text-4xl font-bold text-[#101C40]'>{value}</div>
    </div>
  )
}