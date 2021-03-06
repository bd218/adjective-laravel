<?php

class Student extends Eloquent {

    use UserTrait, RemindableTrait;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'student';

    public function user() {
        return $this->belongsTo('User','User');
    }

    public function courses() {
        return $this->belongsToMany('Course', 'student_course', 'Course', 'Student');
    }
}
