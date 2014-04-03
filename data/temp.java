import java.io.*;

public class temp{
   public static void main (String [] args) throws IOException {
      BufferedReader in = new BufferedReader(new FileReader("countries.txt"));
      int level = -1;
      int count = 0;
      String s = in.readLine();
      while(s!=null){
         if (s.equals("MEDIUM:") || s.equals("HARD:")|| s.equals("EASY:")){
            level++;
            count = 0;
         }else{
            System.out.println("country["+level+"]["+count+"] = \""+s.trim()+"\";");
            count++;
         }
         s=in.readLine();
         
      }
      
   }
}